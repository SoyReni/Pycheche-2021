import React from "react";

export default function Swatch({ setToolType }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div>
          <button type="button" class="btn btn-primary"
              title="Pencil"
              onClick={() => {
                setToolType("pencil");
              }}
            >
              Pencil
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}