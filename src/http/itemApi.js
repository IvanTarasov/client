
import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost.delete('api/type/' + id)
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('api/type/' + id)
    return data
}

export const createProducer = async (producer) => {
    const {data} = await $authHost.post('api/producer', producer)
    return data
}

export const fetchProducers = async () => {
    const {data} = await $host.get('api/producer', )
    return data
}

export const deleteProducer = async (id) => {
    const {data} = await $authHost.delete('api/producer/' + id)
    return data
}

export const fetchOneProducer = async (id) => {
    const {data} = await $host.get('api/producer/' + id)
    return data
}

export const createItem = async (item) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}

export const fetchItems = async (typeId, producerId, page, limit= 5) => {
    const {data} = await $host.get('api/item', {params: {
            typeId, producerId, page, limit
        }})
    return data
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}

export const deleteItem = async (id) => {
    const {data} = await $authHost.delete('api/item/' + id)
    return data
}
