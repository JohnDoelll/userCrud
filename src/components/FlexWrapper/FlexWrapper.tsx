import { Flex, type FlexProps } from 'antd';

export const FlexWrapper = ({ children, ...props }: FlexProps) => {
  return (
    <Flex wrap='wrap' gap={10} justify='flex-end' {...props}>
      {children}
    </Flex>
  );
};
