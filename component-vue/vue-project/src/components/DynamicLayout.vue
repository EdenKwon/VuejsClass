<template>
    <h1>header</h1>
    <slot name="header">
        <h2>default header</h2>
    </slot>

    <slot name="main">
        default main
    </slot>

    <slot name="footer">
        <h2>default footer</h2>
    </slot>
</template>