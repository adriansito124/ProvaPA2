/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "dragonball-api.com"}],
    },
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page",
            },
            {
                source: "/pagina-server",
                destination: "/server-side",
            },
        ]
    }
};

export default nextConfig;
