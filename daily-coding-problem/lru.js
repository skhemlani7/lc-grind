// This problem was asked by Google.

// Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

//     set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
//     get(key): gets the value at key. If no such key exists, return null.

// Each operation should run in O(1) time.


class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return this.cache.get(key);
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */