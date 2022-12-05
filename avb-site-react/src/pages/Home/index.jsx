import { SectionIntro } from '../../components/SectionIntro';
import { SectionLocais } from '../../components/SectionLocais';
import { SectionProdutos } from '../../components/SectionProdutos';
import { SectionSobre } from '../../components/SectionSobre';

export function HomePage() {
    return (
        <div id="home-page">
					<div >
                        <SectionIntro/>
                        
                        <SectionSobre/>
                        <SectionProdutos/>
                        
                        <SectionLocais/>

					</div>
				</div>
    )
}