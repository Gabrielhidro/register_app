import { SupplierRow } from "./SupplierRow";
import { SupplierSectionContainer } from "./styled";

export function SupplierSection({suppliers}: any){

  return (
    <SupplierSectionContainer>
      {suppliers.map((supplier: any) => (
        <SupplierRow supplier={supplier} />
      ))}
    </SupplierSectionContainer>
  )
}