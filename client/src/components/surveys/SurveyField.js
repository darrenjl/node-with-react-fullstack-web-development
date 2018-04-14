import React from "react";
import CustomInput from "mdcomponents/CustomInput/CustomInput";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <CustomInput
        labelText={label}
        inputProps={{...input}}
        formControlProps={{
          fullWidth: true
        }}
      />
      <div style={{ marginBottom: "20px", color: "red" }}>
        {touched && error}
      </div>
    </div>
  );
};
