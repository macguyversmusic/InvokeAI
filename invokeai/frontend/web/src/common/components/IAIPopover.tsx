import {
  BoxProps,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type IAIPopoverProps = PopoverProps & {
  triggerComponent: ReactNode;
  triggerContainerProps?: BoxProps;
  children: ReactNode;
  hasArrow?: boolean;
};

const IAIPopover = (props: IAIPopoverProps) => {
  const {
    triggerComponent,
    children,
    hasArrow = true,
    isLazy = true,
    ...rest
  } = props;

  return (
    <Popover isLazy={isLazy} {...rest}>
      <PopoverTrigger>{triggerComponent}</PopoverTrigger>
      <PopoverContent>
        {hasArrow && <PopoverArrow />}
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default IAIPopover;
