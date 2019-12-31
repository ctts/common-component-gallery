export default class Signature {
    constructor(canvasDom, width, height, background, strokeStyle) {
        this.width = width
        this.height = height
        this.background = background
        this.strokeStyle = strokeStyle
        this.content = canvasDom

    }
    moveStart() {
        this.content.getContext('2d').beginPath()
    }
    moveOn(event) {
        let ctx = this.content.getContext('2d')
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = 2
        ctx.lineTo(event.touches[0].clientX, event.touches[0].clientY)
        ctx.stroke()
    }
    moveEnd() {
        this.content.getContext('2d').closePath()
    }
    clear() {
        this.content.getContext('2d').clearRect(0, 0, this.width, this.height)
    }
    save(type, quality) {
        // 默认为 image/png ，若为 image/webp image/jpeg image/jpg 可设置质量（0-1）
        return this.content.toDataURL(type, quality)
    }
}