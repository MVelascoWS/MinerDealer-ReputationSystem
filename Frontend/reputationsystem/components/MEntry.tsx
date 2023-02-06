import Link from "next/link";

const MEntry = () => {
    return (        
        <tr className=" bg-lwBlack w-full">
            <td className="mEntryText">1</td>
            <td className="mEntryID" ><Link href="/detail"><div>f01662887</div></Link></td>
            <td className="mEntryText">U.S.A.</td>
            <td className="mEntryText">43.39 PiB</td>
            <td className="mEntryText">43.91 PiB</td>
            <td className="mEntryText">O FIL</td>
            <td className="mEntryText">O FIL</td>
            <td className="mEntryText">8.81 PiB</td>
            <td className="mEntryText">O FIL</td>
            <td className="mEntryText">3/5</td>
            <td className="mEntryScore">100</td>
            <td>
                <img className="w-[50px] min-w-0 h-[50px] min-h-0 ml-auto mr-auto" src="/bagdeEmpty.png" alt=""/>
            </td>
        </tr>
      );
}
 
export default MEntry;