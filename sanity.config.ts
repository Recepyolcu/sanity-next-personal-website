import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "qys6dtuf",
    dataset: "production",
    title: "ryo site",
    basePath: "/admin",
    apiVersion: "2023-03-09",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;
