<script>
    const skins = 12;
    // 5 columns per row, slot [0] will always be a placeholder

    function getSkinDisplay() {

    }
</script>

<div class="flex flex-col items-center">
    <div class="flex flex-col gap-10 mt-[4dvh] pb-[4dvh]">

        <!-- Skins -->
        <div class="flex h-full">
            <!-- Placeholder -->
            <div class="bg-[#efefef] border-2 border-[#c5c5c5] rounded-[30px] border-dashed w-[11rem] h-[18rem] flex flex-col items-center">

                <div class="mt-[55%] opacity-20">
                    <img src="/assets/image-icon.png" alt="Icon" class="h-10">
                </div>
                <div class="opacity-40 text-center text-[85%] w-[70%]">
                    <p>Skins that you edit will appear here</p>
                </div>

            </div>
            {#each [1, 2, 3, 4] as i}
                {#if skins >= i}
                    <div class="bg-white border-[1px] border-[#c5c5c5] rounded-[30px] w-[11rem] h-[18rem] ml-10"></div>
                {:else}
                    <div class="w-[11rem] h-[18rem] ml-10"></div>
                {/if}
            {/each}
        </div>

        {#each Array.from({length: Math.ceil((skins - 4) / 5)}) as _, row}
            <div class="flex h-full">
                {#if skins >= ((row + 1) * 5)}
                    <div class="bg-white border-[1px] border-[#c5c5c5] rounded-[30px] w-[11rem] h-[18rem]"></div>
                {/if}
                {#each [1, 2, 3, 4] as i}
                    {#if skins >= ((row + 1) * 5) + i}
                        <div class="bg-white border-[1px] border-[#c5c5c5] rounded-[30px] w-[11rem] h-[18rem] ml-10"></div>
                    {/if}
                {/each}
            </div>
        {/each}

    </div>
</div>