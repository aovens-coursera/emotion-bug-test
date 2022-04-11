/** @jsx jsx */

import { css } from "@emotion/react";
import { jsx } from "@emotion/react/jsx-runtime";

const styles = {
  moo: css({
    fontWeight: 400
  })
};

const Moo = ({ ...rest }) => (
  <div css={styles.moo} {...rest}>
    Moo
  </div>
);

export default Moo;