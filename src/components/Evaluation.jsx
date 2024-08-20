import React from 'react';
// import CircularProgressBar from './ui/circularprogress';

import Check from '@/../public/check.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Image from 'next/image';
import Warning from '@/../public/warning.svg';
import Arrow from '@/../public/rightarrow.svg';
import CircularProgressBar from './ui/circularprogrgess';

function Evaluation({ data }) {
  console.log(data);
  let maxScore = 0,
    score = 0;
  data.criteria.forEach((criteria) => {
    console.log(criteria);
    maxScore += criteria.maxScore;
    score += criteria.score;
  });
  return (
    <>
      <div className="flex justify-between p-4 bg-white rounded-2xl gap-1 mb-2 xl:p-[22px]">
        <div>
          <p className="text-[#3D404B]">Overall Score</p>
          <p className="text-xl font-bold">
            <span className="text-[#3D404B]">Remark : </span>
            <span className="text-[#3CC28A]">Excellent</span>
          </p>
          <p className="text-[14px] text-[#98A1BB]">
            Evaluated on {data.evaluationDate}
          </p>
        </div>
        <div>
          <CircularProgressBar
            progress={(score / maxScore) * 100}
            text={score + '/' + maxScore}
            size={80}
            strokeWidth={8}
            color="#3CC28A"
            fontSize={'17px'}
          />
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 xl:gap-4"
      >
        {data.criteria.map((criteria, index) => (
          <AccordionItem
            key={index}
            value={'item-' + (index + 1)}
            className="bg-white rounded-2xl"
          >
            <AccordionTrigger className="flex justify-start gap-2 p-6 lg:p-3 xl:p-[22px] xl:gap-4">
              <div>
                <CircularProgressBar
                  progress={(criteria.score / criteria.maxScore) * 100}
                  text={criteria.score + '/' + criteria.maxScore}
                  size={60}
                  strokeWidth={6}
                  color={
                    (criteria.score / criteria.maxScore) * 100 > 50
                      ? '#3CC28A'
                      : '#EB751F'
                  }
                  fontSize={'15spx'}
                />
              </div>

              <div className="text-left w-full">
                <p className="text-[14px] text-[#98A1BB]">{criteria.name} :</p>
                <p className="text-[#3D404B]">{criteria.description}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 mt-2 xl:px-[25px]">
              <div className="border-t pt-2 flex flex-col gap-2">
                <p className="text-[#5B6170]">{criteria.info}</p>
                <h2 className="text-black text-xl font-bold">Strengths</h2>
                <div className="border border-[#3CC28A] rounded-xl p-3">
                  {criteria.strengths.map((strength, id) => (
                    <div className="flex gap-2" key={id}>
                      <div className="flex items-start">
                        <Image
                          src={Check}
                          alt="check"
                          className="w-[34px] h-[34px]"
                        />
                      </div>
                      <p className="text-[#3D404B]">{strength}</p>
                    </div>
                  ))}
                </div>
                <h2 className="text-black text-xl font-bold">
                  Scope of Improvement
                </h2>
                <div className="border border-[#F9C94E] rounded-xl p-3">
                  {criteria.improvements?.map((improvement, id) => (
                    <div className="flex gap-2" key={id}>
                      <div className="flex items-start">
                        <Image
                          src={Warning}
                          alt="check"
                          className="w-[40px] h-[40px]"
                        />
                      </div>
                      <p className="text-[#3D404B]">{improvement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* <AccordionItem value="item-2" className="bg-white rounded-2xl">
          <AccordionTrigger className="flex justify-start gap-2 p-6 lg:p-3 xl:p-[22px] xl:gap-4">
            <div>
              <CircularProgressBar
                progress={(5 / 10) * 100}
                text="5/10"
                size={60}
                strokeWidth={6}
                color="#F9C94E"
                fontSize={'15spx'}
              />
            </div>

            <div className="text-left w-full">
              <p className="text-[14px] text-[#98A1BB]">Criteria B:</p>
              <p className="text-[#3D404B]">Understanding Knowledge Question</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 mt-2 xl:px-[25px]">
            <div className="border-t pt-2 flex flex-col gap-2">
              <p className="text-[#5B6170]">
                The essay identifies and focuses on the knowledge question
                regarding the resolvability of disputes over knowledge claims
                within disciplines.
              </p>
              <h2 className="text-black text-xl font-bold">Strengths</h2>
              <div className="border border-[#3CC28A] rounded-xl p-3">
                {[1, 2].map((cur) => (
                  <div className="flex gap-2" key={cur}>
                    <div className="flex items-start">
                      <Image
                        src={Check}
                        alt="check"
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                    <p className="text-[#3D404B]">
                      Demonstrates a good understanding of the prescribed title
                      and the associated knowledge questions.
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="text-black text-xl font-bold">
                Scope of Improvement
              </h2>
              <div className="border border-[#F9C94E] rounded-xl p-3">
                {[1, 2].map((cur) => (
                  <div className="flex gap-2" key={cur}>
                    <div className="flex items-start">
                      <Image
                        src={Warning}
                        alt="check"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                    <p className="text-[#3D404B]">
                      Demonstrates a good understanding of the prescribed title
                      and the associated knowledge questions.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-white rounded-2xl">
          <AccordionTrigger className="flex justify-start gap-2 p-6 lg:p-3 xl:p-[22px] xl:gap-4">
            <div>
              <CircularProgressBar
                progress={(5 / 10) * 100}
                text="5/10"
                size={60}
                strokeWidth={6}
                color="#EB751F"
                fontSize={'15spx'}
              />
            </div>

            <div className="text-left w-full">
              <p className="text-[14px] text-[#98A1BB]">Criteria C:</p>
              <p className="text-[#3D404B]">
                Understanding Knowledge Question{' '}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 mt-2 xl:px-[25px]">
            <div className="border-t pt-2 flex flex-col gap-2">
              <p className="text-[#5B6170]">
                The essay identifies and focuses on the knowledge question
                regarding the resolvability of disputes over knowledge claims
                within disciplines.
              </p>
              <h2 className="text-black text-xl font-bold">Strengths</h2>
              <div className="border border-[#3CC28A] rounded-xl p-3">
                {[1, 2].map((cur) => (
                  <div className="flex gap-2" key={cur}>
                    <div className="flex items-start">
                      <Image
                        src={Check}
                        alt="check"
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                    <p className="text-[#3D404B]">
                      Demonstrates a good understanding of the prescribed title
                      and the associated knowledge questions.
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="text-black text-xl font-bold">
                Scope of Improvement
              </h2>
              <div className="border border-[#F9C94E] rounded-xl p-3">
                {[1, 2].map((cur) => (
                  <div className="flex gap-2" key={cur}>
                    <div className="flex items-start">
                      <Image
                        src={Warning}
                        alt="check"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                    <p className="text-[#3D404B]">
                      Demonstrates a good understanding of the prescribed title
                      and the associated knowledge questions.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
      <div className="xl:mt-3">
        <div className="inline-flex justify-start px-3 py-2 rounded-3xl gap-1 mb-2 text-[#6947BF] font-bold bg-white w-auto xl:p-4 xl:gap-2">
          check detailed Evaluation{' '}
          <span className="flex items-center">
            <Image src={Arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Evaluation;
