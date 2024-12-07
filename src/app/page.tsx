import Dropzone from "@/components/Dropzone";
import Dropdown from "@/components/Dropzone";
import Image from "next/image";


export default function Home() {
  return (
    
    <div>
      <div>
        <div>
          Heading area
        </div>
        <div>
          Dropbox component
          <Dropzone/>
        </div>
        <div>
          sub summary section
        </div>
      </div>
    </div>

  );
}
