import { Context, Schema } from 'koishi'
import type {} from 'koishi-plugin-k2s'

export const name = 'systools2'

export interface Config {
}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.using(['k2s'], (ctx: Context) => {
    ctx.k2s.ensureEnvironment()
  })
}
