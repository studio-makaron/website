export const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export function multiLerp(data: number[], position: number) {
  return lerp(data[Math.floor(position)], data[Math.ceil(position)], position % 1);
}
