import * as React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleActive = () => (
    <div>
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Noms</Table.HeaderCell>
                <Table.HeaderCell>Adresse</Table.HeaderCell>
                <Table.HeaderCell>Montant</Table.HeaderCell>
                <Table.HeaderCell>Contact</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
            </Table.Row>
            <Table.Row >
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Selected</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
)

export default TableExampleActive