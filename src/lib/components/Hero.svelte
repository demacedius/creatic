<script>
	import Welcome from "./Welcome.svelte";
    import imgSrc from '../../../src/lib/assets/beautiful-woman-with-big-jewel.png'
</script>
<section class="flex">
    <Welcome/>
    <div class="w-full h-[75vh] bg-gradient-to-r from-blue0 from-50% to-blue67/[15%]">
        <img src="{imgSrc}" alt="beautiful-woman-with-big-jewel" class=" mix-blend-screen ">
    </div>

</section>

<style>
    img{
        object-fit: cover;
        position: absolute;
        overflow: hidden;
        right: 10%;
        bottom: 9rem;
        height: 60%;
    }
    
</style>