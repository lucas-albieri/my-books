export { auth as middleware } from "@/lib/auth";

export default function config() {
    return {
        matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    };
}
