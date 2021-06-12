import { conceptTrad } from "../../types";

export function withExample(conceptInTrad: conceptTrad, example: string) {
    return Object.fromEntries(
        Object.entries(conceptInTrad)
            .map(([key, concept]) => [key, {
                concept,
                example
            }])
    );
}
