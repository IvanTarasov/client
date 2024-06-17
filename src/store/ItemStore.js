import {makeAutoObservable} from 'mobx';

export default class ItemStore {
    constructor() {
        this._types = []

        this._producers = []

        this._items = []

        this._selectedType = {}
        this._selectedProducer = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setProducers(producers) {
        this._producers = producers
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedProducer(producer) {
        this._selectedProducer = producer
    }

    get types() {
        return this._types
    }

    get producers() {
        return this._producers
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedProducer() {
        return this._selectedProducer
    }
}