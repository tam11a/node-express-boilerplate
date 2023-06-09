const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
	info: {
		version: "1.0.0",
		title: "App API",
		description:
			"Documentation automatically generated by the <b>swagger-autogen</b>.",
	},
	servers: [
		{
			url: "http://localhost:4000/",
			description: "local server",
		},
		{
			url: "http://localhost:4001/",
			description: "the other server",
		},
	],
	basePath: "/",
	schemes: ["http", "https"],
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
		bearerAuth: {
			type: "http",
			scheme: "bearer",
			bearerFormat: "JWT",
		},
	},
	definitions: {},
};

const outputFile = "src/swagger.json";
const endpointsFiles = ["src/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
	require("./index"); // Your project's root file
});
