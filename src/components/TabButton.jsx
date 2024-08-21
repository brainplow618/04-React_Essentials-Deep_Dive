export default function TabButton({children, isSelected, ...props}) {
    console.log('button App componenet run');
    return <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>
}