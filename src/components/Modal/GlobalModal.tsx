import * as React from 'react';
import { ReactNode } from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { useBoolean } from '@fluentui/react-hooks';
import { FiPocket } from 'react-icons/fi';
import { VscClose } from "react-icons/vsc";

interface IReactChildren {
    children: ReactNode
}


const modelProps = {
    isBlocking: false,
    styles: { main: { 
        minWidth: 650, color: "purple" ,
    } },
};
// const dialogContentProps = {
//   type: DialogType.largeHeader,
//   title: 'All emails together',
//   subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
// };

export const GlobalModal = ({ children }: IReactChildren) => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

    return (
        <>
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                modalProps={modelProps}
            >
                    <div className="flex items-end w-full flex-col">
                        <VscClose size={32} color={'grey'} onClick={toggleHideDialog} className="cursor-pointer"/>
                    </div>
                {children}

            </Dialog>
        </>
    );
};
