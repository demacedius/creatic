<script>
	import AbousUs from "./AbousUs.svelte";
    import Robot from  "../../../src/lib/assets/robot.png"
    
</script>
<div class="w-full h-screen bg-gradient-to-r from-blue67/[10%] from-30% to-blue0 ">
    <img src={Robot} alt="robot take a tablet and say hello">
    <AbousUs />
</div>

<style>
    img{
        position: absolute;
        top: 46em;
        left: 4em;
        transform: scale(80%);
    }

 
</style>

