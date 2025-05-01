# [BUG] Vue 3 - TypeScript - GlobalComponents

> [!TIP]
> 相关讨论见：
>
> https://github.com/vuejs/language-tools/issues/5324
>

详细的版本测试见 <https://github.com/Vanisper/uni-app-gc-bug#readme>

结论：

> vue@3.4 - vue.volar@2.2.8

TypeScript:
1. ✅ 5.6.0-beta
2. ❗ 5.6.0-dev.20240604 ~ 5.6.0-dev.20240612 - 该阶段的ts版本，项目内的 GlobalComponents 有效，并且依赖中如果有多个含有 GlobalComponents 声明的依赖，只有部分会生效
   - 其中一处是项目内部的声明，另外的是依赖中某些依赖的声明生效（并不会全部生效）
3. ✅ 5.6.0-dev.20240613 ~ 5.6.0-dev.20240731 - 该阶段的ts版本，是有生效的
4. ❌ 5.6.0-dev.20240801 ~ ... - 之后的版本在当前项目中的表现与第2点的表现一致

> vue版本升级到 3.5.x 即可解决以上所有版本问题
