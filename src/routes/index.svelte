<script>
    import {onMount} from 'svelte'
    
    let Carousel
    onMount(async () => {
        const module = await import("svelte-carousel")
        Carousel = module.default
    })
    let imagenes = [
	{
		image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	},
	{
		image: 'https://cdn.pixabay.com/photo/2016/08/03/09/03/universe-1566159_960_720.jpg'
	},
	{
		image: 'https://cdn.pixabay.com/photo/2016/08/05/12/44/space-1572212_960_720.png'
	}
]

</script>

<svelte:component this={Carousel} autoplay autoplayDuration={2400} >
    {#each imagenes as image}
            <img src={image.image} alt=""/>
    {/each}
</svelte:component>