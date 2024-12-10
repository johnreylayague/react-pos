import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

type PesosInputFieldProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

export const PesosInputField = React.forwardRef<NumericFormatProps, PesosInputFieldProps>(
  function NumberFormatter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator=","
        prefix="₱"
      />
    );
  }
);

export default PesosInputField;
