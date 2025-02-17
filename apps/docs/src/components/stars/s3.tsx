/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAixJREFUSEuNVTtSAkEQfcuCVSSQuGiCpnoBJVb85esR4AxwAvQKcAMpcqiSHLwAxmigSAIJVYKMtfPZ7dmZodjAkp6Z97r7venxGGMMDIAH86Nx+X8Sci/SFY8TyM84YsGgWbjyonucBHxTCmEyeefB87NzwNMXXWSEwJ2PWsnn85x3tVrZ+PWE5CGTwNGWTqeDer3OgdvtNmq1muiEJS+qk9YiV1qRShk/I8Dkt91u4XnKGZFPPOkTndHRIn1TGIbo9XocOoKMVsPwEd3ui+486jRni1JmXS6XKBaLMqrgxc/FYoFCoWDxd9I600UpDU5Oy/j8+ATTsTlouVzGdDo1hNA02DLGz6bVija9jceoVCqiLfKPB3Ev1Tcaj3B5cSm0tlxGUYHDCQe5HDabjcAyKhCBbC6L9e+aUDpFpjUwPD09o9lsJgctLVKhVquFRqMR76XVmDYFEFnQ931dPIlm4eHl/W3WyGR8Y6ZpLVLM1ZsqhsOhpS2UM/I9i8W/vrrC66s8Q7YRAtG72WyGo6NjcZg2n6aeqB5DRaGv72+USoG4dOoepF0UBAHm87mpqSRLu4g64DA4xM/sh3iGQdNgMBjg/uGee5ICJcnTuN4iVUq/38ft3V38vDhtalyNfYa/cadVBa6JSP0mD9t5LG+DqYEFQRJQ0XYOHlq2bdglQO5+WIqyc8rofu9BPOst74sxf1L30/Xo70yLdtMoaa9ZROF3OkCfP1IDqtk/kLhLw9sw/nsAAAAASUVORK5CYII=)
 */
export default function Star3({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string
  size?: number
  stroke?: string
  pathClassName?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="m100 5 3.277 63.822 16.475-61.746-10.064 63.108 28.952-56.97-22.965 59.636 40.165-49.707-34.863 53.56 49.622-40.27-45.236 45.14L182.272 52.5 128.64 87.249l61.71-16.606-59.685 22.839 63.815-3.412-63.13 9.93 63.13 9.93-63.815-3.412 59.685 22.839-61.71-16.606 53.632 34.749-56.909-29.073 45.236 45.14-49.622-40.269 34.863 53.559-40.165-49.707 22.965 59.637-28.952-56.971 10.064 63.108-16.475-61.746L100 195l-3.277-63.822-16.475 61.746 10.064-63.108-28.952 56.971 22.965-59.637-40.165 49.707 34.863-53.559L29.4 163.567l45.236-45.14-56.91 29.073 53.633-34.749-61.71 16.606 59.685-22.839L5.52 109.93 68.65 100 5.52 90.07l63.815 3.412L9.65 70.643 71.36 87.25 17.728 52.5l56.91 29.073L29.4 36.433l49.622 40.27-34.863-53.56L84.325 72.85 61.36 13.213l28.952 56.971L80.248 7.076l16.475 61.746z"
      />
    </svg>
  )
}
