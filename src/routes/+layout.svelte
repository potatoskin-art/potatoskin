<script>
    import "../app.css";
    import { page } from '$app/stores';

    const pages = [
        { name:"EDITOR", href:"/" },
        { name:"HISTORY", href:"/history" },
        { name:"ABOUT", href:"/about" },
        { name:"COMMUNITY", href:"/community" },
    ]
</script>

<div class="min-h-screen bg-[#F6F6F6]">
    <!-- Header -->
    <div class="bg-white h-[6dvh] drop-shadow-[0_1px_1px_rgb(0,0,0,0.2)] flex items-center">
        <!-- Logo -->
        <div class="h-[50%]">
            <img src="/favicon.png" alt="Favicon" class="h-full ml-10">
        </div>
        <div class="font-[Minecraft] text-3xl">
            <p class="ml-3 text-[#808080]">PotatoSkin<span class="text-[#a6a6a6]">.art</span></p>
        </div>
        <!-- Pages -->
        <div class="ml-32 flex gap-16 text-xl text-[#a6a6a6] font-light">
            {#each pages as p}
                <div class={$page.url.pathname === p.href ? "font-bold text-[#666666]" : ""}> <!-- bold selected page -->
                    <a href={p.href}>{p.name}</a>
                </div>
            {/each}
        </div>
    </div>
    <!-- Page Content -->
    <div class="h-[94dvh]">
        <slot />
    </div>
</div>