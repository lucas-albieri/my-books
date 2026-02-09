import ky from "ky";

export const api = ky.create({
    prefixUrl: "/api",
    timeout: 30000,
    retry: {
        limit: 2,
        methods: ["get", "post", "put", "delete"],
    },
    hooks: {
        beforeError: [
            (error) => {
                const { response } = error;
                if (response && response.body) {
                    error.name = "APIError";
                    error.message = `${response.status} - ${response.statusText}`;
                }
                return error;
            },
        ],
    },
});
