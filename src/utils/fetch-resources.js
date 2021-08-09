import fs from "fs";
import path from "path";
import matter from "gray-matter";

const resourcesDirectory = path.join(process.cwd(), "/resources");

export const getAllResourceSlugs = (locales) => {
  const folderNames = fs.readdirSync(resourcesDirectory);

  return folderNames.reduce((pathArr, folder) => {
    for (const locale of locales) {
      pathArr.push({
        params: {
          slug: folder,
        },
        locale,
      });
    }
    return pathArr;
  }, []);
};

export const getResourceData = async (slug, locale) => {
  const fullPath = path.join(resourcesDirectory, slug, `${locale}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  if (!fileContents) {
    return {
      notFound: true,
    };
  }

  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
  };
};

export const getResourceList = (locale) => {
  const folderNames = fs.readdirSync(resourcesDirectory);

  return folderNames.map((folder) => {
    const fullPath = path.join(resourcesDirectory, folder, `${locale}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    if (fileContents) {
      const matterResult = matter(fileContents);
      const link = `/resources/${folder}`;

      return {
        link,
        ...matterResult.data,
      };
    }
  });

  /*
  return folderNames.reduce((resourceArr, folder) => {
    const fullPath = path.join(resourcesDirectory, folder, `${locale}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    if (!fileContents) {
      return resourceArr;
    }

    const matterResult = matter(fileContents);
    const link = `/resources/${folder}`;

    resourceArr.push({
      link,
      ...matterResult.data,
    });

    return resourceArr;
  }, []);
  */
};
