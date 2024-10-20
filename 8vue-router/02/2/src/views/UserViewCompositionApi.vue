<script setup>
    import { onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRouter();

    onBeforeMount(
        () => {
            const name = route.query.name;
            const age = route.query.age;
            console.log(name);
            console.log(age);
        }
    )
</script>