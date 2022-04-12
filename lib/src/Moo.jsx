import { css } from "@emotion/react";

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