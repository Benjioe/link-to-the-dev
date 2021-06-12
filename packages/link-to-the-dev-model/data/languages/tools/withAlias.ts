import { conceptTrad } from "../../types";

export function withAlias(conceptInTrad: conceptTrad, alias: string) {
    return Object.fromEntries(
        Object.entries(conceptInTrad)
            .map(([key, {name, ...concept}]) => [key, {
                name: `${alias} (${name})`
                ...concept
            }])
    );
}
