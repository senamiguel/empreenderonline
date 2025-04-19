import * as Accordion from '@radix-ui/react-accordion';
import './styles/Faq.css';

function Faq() {
  return (
    <section className="faq">
      <h2>Perguntas Frequentes</h2>
      <Accordion.Root type="single" collapsible className="faq-accordion">
        <Accordion.Item value="item-1" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
              <h3>Lorem ipsum dolor sit amet?</h3>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
            <h3>Lorem ipsum dolor sit amet?</h3>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
            <h3>Lorem ipsum dolor sit amet?</h3>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            At vero eos et accusamus et iusto odio dignissimos.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
            <h3>Lorem ipsum dolor sit amet?</h3>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            At vero eos et accusamus et iusto odio dignissimos.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-5" className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger">
            <h3>Lorem ipsum dolor sit amet?</h3>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-content">
            At vero eos et accusamus et iusto odio dignissimos.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <button className='faq__btn'>Começar</button>
    </section>
  );
}

export default Faq;
