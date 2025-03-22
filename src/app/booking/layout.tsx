export default function ReservationLayout({ children }: {children:React.ReactNode}) {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>    
            {children}
        </div>
    );
}