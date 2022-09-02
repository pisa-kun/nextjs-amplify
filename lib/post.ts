import path from "path";
import fs from "fs";
// https://blog.narumium.net/2020/11/19/%E3%80%90typescript%E3%80%91gray-matter%E3%81%A7sections/
import matter from 'gray-matter';
import {remark} from 'remark';
import html from "remark-html";

// postsフォルダのパスを取得
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す
export const getPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // ファイル名
        const id = fileName.replace(/\.md$/, "");

        // マークダウンを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        // title, data, thumbnailを配列で返す
        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data
        };
    });
    return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
export const getAllPostsIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return{
            params: {
                id: fileName.replace(/\.md$/, ""),

            },
        };
    });
}

// idに基づいてブログ投稿データを返す
export const getPostData = async(id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContent);
    // npm remark, remark-html
    const blogContent = await remark()
    .use(html)
    .process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}