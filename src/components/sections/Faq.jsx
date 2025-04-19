import * as Accordion from '@radix-ui/react-accordion';
import '../../styles/Faq.css';

function Faq() {
  return (
    <section className="faq">
      <h2>Perguntas Frequentes</h2>
      <Accordion.Root type="single" collapsible className="faq-accordion">
        <Accordion.Item value="item-1" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Como a IA vai criar minha empresa?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Nossa IA vai criar sua empresa do zero, desenvolvendo um site profissional, configurando campanhas de marketing, automatizando processos e gerenciando todo o negócio para você.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Quanto tempo leva para ter minha empresa funcionando?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Em até 7 dias você terá seu site pronto e as primeiras campanhas de marketing rodando. Em 30 dias sua empresa estará totalmente estruturada e gerando resultados.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Preciso ter conhecimento técnico ou experiência?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Não é necessário nenhum conhecimento técnico ou experiência. Você só precisa nos contar sobre sua ideia de negócio e a IA cuida de todo o resto, desde a criação do site até a gestão do negócio.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Quais são as formas de pagamento aceitas?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Aceitamos cartões de crédito, PIX e boleto bancário. O pagamento é processado de forma segura através de nossa plataforma.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-5" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Posso cancelar o serviço a qualquer momento?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Sim, você pode cancelar o serviço a qualquer momento sem multa. O cancelamento é efetivo no final do período contratado.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <button className='faq__btn'>Começar</button>
    </section>
  );
}

export default Faq;
