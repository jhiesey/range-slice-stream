import type { Readable, Writable, WritableOptions } from "readable-stream"
  
export default class RangeSliceStream extends Writable {
    satisfied: boolean

    constructor(offset?: number, opts?: WritableOptions)
    slice(range: { start: number, end: number }): Readable | null
    slice(ranges: { start: number, end: number }[]): Readable | null
}
