import Image from 'next/image';
import GlobalWindowTitle from '@/components/layout/global-windowtitle';
import Divider from '@/components/layout/divider';
import { TechStack } from '@/content/tech-stack';
import TechStackItem from '@/components/layout/tech-stack-item';

export default function Home() {
	const scrollDown = () => {
		window.scrollTo({
			top: window.innerHeight + 100,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<GlobalWindowTitle />
			<div className={'flex flex-col py-16 gap-16'}>
				<div
					className={'flex max-h-screen items-center justify-center'}>
					<div className={'flex flex-1 px-8 max-w-screen-lg'}>
						<div className={'flex flex-col'}>
							<h1
								className={
									'text-black max-w-xl text-4xl tracking-wide leading-relaxed'
								}>
								Alo! I'm a software developer and .
							</h1>
						</div>
					</div>
				</div>

				{/* <div className={"flex flex-col items-center mb-12"}>
          <Image
            onClick={scrollDown}
            height={100}
            width={100}
            src={"/down-arrow.png"}
          />
        </div> */}

				<div className={'flex-1 gap-16 flex flex-col items-center'}>
					<p
						className={
							'text-4xl text-center font-bold leading-relaxed'
						}>
						I've worked with:
					</p>
					<ul
						className={
							'flex flex-col rounded border border-t-slate-200 w-1/2 max-h-96 p-8 gap-4 items-center overflow-y-scroll shadow-xl'
						}>
						{TechStack.map((tech) => (
							<>
								<TechStackItem
									key={tech.order}
									{...tech}
								/>
							</>
						))}
					</ul>
				</div>

				{/* <div className={"flex"}>
          <div
            className={
              "flex flex-1 flex-col p-16 h-1/2 items-center justify-center border border-red-500"
            }
          >
            <h1 className={"text-4xl text-center font-bold leading-relaxed"}>
              Some of my projects are:
            </h1>
          </div>
          <div className={"flex flex-1 border border-red-500"}></div>
        </div> */}
			</div>
		</>
	);
}
