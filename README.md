## Command

```
ng generate component navbar/logo --skip-import
&& ng generate component navbar/navlist --skip-import
&& ng generate component banner --skip-import &&
ng generate component button --skip-import
&& ng generate component about --skip-import
&& ng generate component footer --skip-import
&& ng generate component navbar --skip-import
```

There are 2 parts to using the components in the angular ecosystem.
Step 1 is to create them, which we already did.
Step 2 is to register the components so that angular ecosystems can identify the custom selectors

There is another approach called modules which we will discuss in a dedicated video.

If we dont provide skip import, it automatically registers the components. But for practice, i wanted to do those myself.
