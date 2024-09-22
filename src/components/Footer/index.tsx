import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';
import React from "react";

const Footer: React.FC = () => {
  const intl = useIntl();

  const currentYear = new Date().getFullYear();

  const produced = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'micah',
  });

  return <DefaultFooter copyright={`${currentYear} ${produced}`} />;
};

export default Footer;
