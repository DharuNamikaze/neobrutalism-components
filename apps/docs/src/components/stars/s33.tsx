/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABBBJREFUSEuFVk1PWmkUfi5f4duov0MjdDNNJy2YqRtkMy7VQRbQTBOtCzsLUZiC0Y2JQZuMaBcFFy7qxviRTE24tFOTdiE6/R9iBhCQrzt5z73Avd7rzLsA8p73fc85z/Occ+DagiBwkC0BgGIDoC3pQwCnNPeM0iPSA9IXJwgC+9lbSjvty32q/Gs4kAehdiDz1Wq1cHtbxuvXvyG1nVJkFg6Hsb6+DpvNBr1e90DaLHOWgSpqtsXBZDKifleHXqdDsVSC3W4n9+VyGQ6HA+12G0ajEc1mUwajAg/JgQYQzMHgwAB8Ph8ODg7w+IfHyPJZOukd9eLb12+YmJjA8fExbm5uxFflgf4fB+x8JpNBIBDA7Owstt5uQWiLdHE6Dq/mXiGZTOJ9+j0CvwS0aBTPqlR0j3D2mNfjAf8ph/xFnhTkcrvh9XrB8zw6GumRr5RBl2RGqMVshtVmw8bGBoLBILlKJBKIRqOwmC3wjY9DENo4PT1FtVol29LSEmGTTmcwPz+PUqmE+t0ddDo9abtLcrFUJOJmgjPIpPfo0pvf3yAai8JkMpGNBQFBgMFgBDtfr9eRWEkguhwDBwGTU1MEK3PidDiVDn59+RLb23/AbDEjHHqB79//Ri6XI5XwuRx+fPIEHCdWIIPl/PwczzweNBsNeDweDA0NYXd3F7XaHcLhEFKpFAWpqINKpQK/349sNktYm80WWG0WXF8XMDIygqurK9p3ux/hIp/HwEA/QVWt1igD7+goDg8Pu3ImkuV1IJfa5eUl1tbW8PHjn/inWCJo5Itl43Q6MTY2hsXFRQqgs+Q0y1SkrLZ8Po/V1VWcnZ0Rph21sAzoJHPgcOCn588RiSzB5eo4EIu0085EB9LbrEIZRAx7gshigdVqReH6GiMuF1hWbD0iiC4wODgIBmsHIsbJ0dERbHa71BxldRAKhfHu3S7JMfwihIv8Jb58+QsmowlZnpdIJlS7JDNyG40G1cTw8DB2dnaIk1AoRL97HAAolcqw222YnJzE/v4+GVdWVhCJREimfX19JEsGjcFgQLEoypSdWV5epvNTJNM9lMslOOwOpUybrSbMZjPpN7mZxPT0NF2Kx+OIxWJSoflo7+TkRCy0eBxL0uPpdJoKjcFcq9Wg1+vVrULV9wXWd3TweD3I8TwY8Wy53W48ffoMnz9/EvsTp5wZCrX1epF6lLGoZmaCmJubxebmZk9JHEcN8O3WFtJ7GUxPidlqrf9sdv39/fD7x/Hhw7127fXiK7Xrn6kvFQqFhx30Ck2dgVEaODqdjmrh/sAR2m3qS4w/jVEutgo5RPcHeqvdQuW2goWFhe7I7DykHJkioZoQqVrFg0eZQTvO7hUNs6zZKUucLmmMQNWfCHlAGg7+BVGOM9L7afQEAAAAAElFTkSuQmCC)
 */
export default function Star33({
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
        d="M92.874 82.969C36.151-54.164 100 16.636 100 90.762c0-74.221 63.849-144.926 7.126-7.888 56.818-137.038 51.877-41.91-.57 10.548 52.447-52.458 147.65-57.305 10.546-.57 137.104-56.735 66.319 7.128-7.886 7.128 74.205 0 144.895 63.862 7.886 7.127 137.009 56.83 41.901 51.888-10.546-.57 52.447 52.458 57.293 147.682.57 10.549 56.723 137.133-7.126 66.333-7.126-7.888 0 74.221-63.849 144.926-7.126 7.888-56.818 137.038-51.877 41.909.57-10.549-52.447 52.458-147.65 57.305-10.546.57-137.104 56.735-66.32-7.127 7.886-7.127-74.205 0-144.895-63.863-7.886-7.128-137.009-56.83-41.901-51.888 10.546.57-52.447-52.363-57.293-147.586-.57-10.453"
      />
    </svg>
  )
}
