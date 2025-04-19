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
              <h3>Como funciona o Empreender Online?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            O Empreender Online é uma plataforma que conecta empreendedores com mentores especializados. Você pode agendar consultorias personalizadas, participar de workshops e acessar recursos exclusivos para impulsionar seu negócio.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Quais são os benefícios de ser um mentor?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Como mentor, você terá a oportunidade de compartilhar seu conhecimento, construir sua reputação profissional, expandir sua rede de contatos e gerar renda adicional através das consultorias.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Como são realizadas as consultorias?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            As consultorias são realizadas online através de videoconferência, com duração de 1 hora. Você pode agendar no horário mais conveniente para você e o mentor.
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
              <h3>Posso cancelar ou reagendar uma consultoria?</h3>
              <svg className="chevron" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"/>
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Sim, você pode cancelar ou reagendar sua consultoria até 24 horas antes do horário agendado. Após esse período, será cobrada uma taxa de cancelamento.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <button className='faq__btn'>Começar</button>
    </section>
  );
}

export default Faq;
