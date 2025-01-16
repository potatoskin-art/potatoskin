<script>
    const skins = 13;
    // 5 columns per row, slot [0] will always be a placeholder
</script>

<div class="flex flex-col items-center h-full">
    <div class="mt-[4dvh] w-[42%] h-full">

        <div class="flex flex-col gap-[3dvh]">

            <!-- Skins -->
            <div class="flex h-full">
                <div class="bg-gray-400 w-[17%] h-[22dvh]"></div> <!-- Placeholder -->

                {#each [1, 2, 3, 4] as i}
                    {#if skins >= i}
                        <div class="bg-red-600 w-[17%] h-[22dvh] ml-[3.75%]"></div>
                    {/if}
                {/each}
            </div>

            {#each Array.from({length: Math.ceil((skins - 4) / 5)}) as _, row}
                <div class="flex h-full">
                    {#if skins >= ((row + 1) * 5)}
                        <div class="bg-red-600 w-[17%] h-[22dvh]"></div>
                    {/if}
                    {#each [1, 2, 3, 4] as i}
                        {#if skins >= ((row + 1) * 5) + i}
                            <div class="bg-red-600 w-[17%] h-[22dvh] ml-[3.75%]"></div>
                        {/if}
                    {/each}
                </div>
            {/each}

        </div>

    </div>
</div>