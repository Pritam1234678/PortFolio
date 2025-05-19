import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
const topline1 = "As an aspiring WebDeveloper";
const topline2 = "I aim to build efficient and";
const topline3 = "scalable software solutions.";

const bottomline1 = "Using my skills in Java, React,";
const bottomline2 = "and cloud technologies, I strive";
const bottomline3 = "to deliver real-world impact.";

  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px]">My mission</p>
          <div>
            <Header3 phrase={topline1} />
            <Header3 phrase={topline2} />
            <Header3 phrase={topline3}/>
          </div>
        </div>
        <div>
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
          <Header3 phrase={bottomline3} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
