import React from 'react';
import { Accordion } from './accordion';
import './accordion.composition.scss';
import { AccordionItem } from './components/AccordionItem/AccordionItem';
import { PercentileIcon } from './components/PercentileIcon/PercentileIcon';
//import { Button } from '../button';

export type AccordionArgs = {
    title?: string;
    opened?: boolean;
    disabled?: boolean;
    withBottomBorder?: boolean;
    smallTitle?: boolean;
};

const TextAccordionItemWithButton = ({
    title = "Title",
    opened,
    disabled,
    withBottomBorder,
    smallTitle,
}: AccordionArgs) => {
  return (
    <AccordionItem
      id="1"
      title={title}
      withBottomBorder={withBottomBorder}
      opened={opened}
      disabled={disabled}
      ariaLabel={title}
      smallTitle={smallTitle}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequate.
      </p>
      {/* <Button className="accordion-button">Click me</Button> */}
    </AccordionItem>
  );
};

export const Basic = ({...args}: AccordionArgs) => {
  return (
    <div className="accordion-wrapper">
      <Accordion>
        <TextAccordionItemWithButton {...args}/>
      </Accordion>
    </div>
  );
};

export const WithPercentileIconInTitle = () => {
  return (
    <div className="accordion-wrapper">
      <Accordion>
        <AccordionItem
          id="1"
          title={
            <>
              What do the <PercentileIcon /> scores mean?
            </>
          }
          ariaLabel="What do the percentile scores mean"
          smallTitle
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* <Button className="accordion-button">Click me</Button> */}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
