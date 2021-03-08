import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
export default props => (
    <div role='form' className='todoForm'>
        {/* 12 - MOBILE 
        9 - DISPOSITIVOS PEQUENOS
        10 - DISPOSITIVOS MEDIOS */}
        <Grid cols='12 9 10'>

            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                 value={props.description} />
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onCLick={props.handleAdd}></IconButton>

        </Grid>
    </div>
)