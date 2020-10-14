<template>
    <div class="md:flex py-2">
        <div class="flex xs:w-full md:w-1/3 px-2 xs:mb-4 md:mb-0">
            <p class="xs:text-xs sm:text-sm text-azul font-semibold">Productos encontrados:</p><p class="pl-2 text-gray-800 text-sm">185</p>
        </div>
        <div class="flex xs:w-full md:w-2/3 md:justify-end px-2">
            <p class="xs:text-xs sm:text-sm text-azul font-semibold">Ordenar por:</p>
            <select class="pl-2 text-gray-800 text-sm border-b mb:pb-2">
                <option value="">Seleccione</option>
                <option value="">Menor precio</option>
                <option value="">Mayor precio</option>
                <option value="">Más vendidos</option>
                <option value="">Mejor evaluados</option>
                <option value="">A - Z</option>
                <option value="">Z - A</option>
                <option value="">Fecha de lanzamiento</option>
                <option value="">Mejor descuento</option>
            </select>
            <p class="xs:text-xs sm:text-sm text-azul font-semibold px-2">Items por página:</p>
            <select class="pl-2 text-gray-800 text-sm border-b md:pb-2">
                <option value="">48</option>
                <option value="">96</option>
                <option value="">144</option>
                <option value="">192</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    name:'Mostrar'
}
</script>