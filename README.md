# pixolith Recipes
Symfony Flex Recipes for pixolith shopware 6 plugins

## Usage
Add the generated [index.json](https://raw.githubusercontent.com/pixolith/recipes/flex/main/index.json) to `extra.symfony.endpoint` in your `composer.json`
```diff
{
    "extra": {
        "allow-contrib": true,
        "endpoint": [
+            "https://raw.githubusercontent.com/pixolith/recipes/flex/main/index.json",
            "https://raw.githubusercontent.com/shopware/recipes/flex/main/index.json",
            "flex://defaults"
        ]
    }
}
```
